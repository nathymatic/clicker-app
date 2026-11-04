import { useEffect, useState } from "react";

// === TYPE ===

export type Clicker = {
  clicks: number;
  set: (some: number) => void;
  increment: () => void;
  reset: () => void;
  spend: (amount: number) => boolean;

  multiplier: number;
  multiplierCost: number;
  multiplierLevel: number;
  purchaseMultiplier: () => boolean;

  autoClicksGainedPerSec: number;
  autoClickerIntervalSec: number;
  autoClickerCost: number;
  autoClickerLevel: number;
  purchaseAutoClicker: () => boolean;
};

// === CONSTANTS ===
const MULTIPLIER_BASE_COST = 25;
const AUTOCLICKER_BASE_COST = 50;
const INTERVAL_CAP_MS = 100;
const EPSILON = 0.00001;

const getCost = (level: number, baseCost: number): number =>
  (level + 1) * baseCost;

const getClicksPerSec = (intervalMs: number, mult: number) =>
  Number.parseFloat(((1000 / intervalMs) * mult).toFixed(1));

const getIntervalSec = (intervalMs: number) =>
  Number.parseFloat((intervalMs / 1000).toFixed(1));

export function useClicker(): Clicker {
  // === STATE VARIABLES ===
  const [clicks, setClicks] = useState(0);

  const [multiplierLevel, setMultiplierLevel] = useState(0);

  const [autoClickerLevel, setAutoClickerLevel] = useState(0);
  const [autoClickerIntervalMs, setAutoClickerIntervalMs] = useState(1000);

  //  === VARIABLES ===
  const multiplier = multiplierLevel + 1;
  const multiplierCost = getCost(multiplierLevel, MULTIPLIER_BASE_COST);

  const autoClickerCost = getCost(autoClickerLevel, AUTOCLICKER_BASE_COST);
  const autoClicksGainedPerSec = getClicksPerSec(
    autoClickerIntervalMs,
    multiplier,
  );
  const autoClickerIntervalSec = getIntervalSec(autoClickerIntervalMs);

  // === CLICKER ACTIONS ===
  const set = (some: number) => setClicks(some);
  const increment = () => setClicks((previous) => previous + multiplier);
  const reset = () => set(0);
  const spend = (amount: number): boolean => {
    if (amount <= 0 || clicks < amount) return false;

    setClicks((previous) => previous - amount);
    return true;
  };

  // === UGPRADES ===

  const purchaseMultiplier = (): boolean => {
    if (!spend(multiplierCost)) return false;

    setMultiplierLevel((previous) => previous + 1);
    return true;
  };

  const purchaseAutoClicker = (): boolean => {
    const isAtCap = autoClickerIntervalMs <= INTERVAL_CAP_MS + EPSILON;
    if (isAtCap || !spend(autoClickerCost)) return false;

    setAutoClickerIntervalMs((previous) =>
      Math.max(INTERVAL_CAP_MS, previous - 100),
    );
    setAutoClickerLevel((previous) => previous + 1);

    return true;
  };

  // === AUTOCLICKER ===
  useEffect(() => {
    if (autoClickerLevel === 0) return;

    const interval = setInterval(increment, autoClickerIntervalMs);

    return () => clearInterval(interval);
  }, [autoClickerLevel, autoClickerIntervalMs, multiplier]);

  // === DATA ===

  return {
    clicks,
    set,
    increment,
    reset,
    spend,

    multiplier,
    multiplierCost,
    multiplierLevel,
    purchaseMultiplier,

    autoClicksGainedPerSec,
    autoClickerIntervalSec,
    autoClickerCost,
    autoClickerLevel,
    purchaseAutoClicker,
  };
}
