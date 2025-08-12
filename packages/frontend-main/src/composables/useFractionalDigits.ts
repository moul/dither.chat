import { defaultFractionalDigits, defaultMinimalCoinDenom } from '@/utility/atomics';
import { getChainConfigLazy } from '@/utility/getChainConfigLazy';

export const useFractionalDigits = (coinMinimalDenom = defaultMinimalCoinDenom) => {
    const chainConfig = getChainConfigLazy();
    const currency = chainConfig.value.currencies.find(c => c.coinMinimalDenom === coinMinimalDenom);
    return currency ? currency.coinDecimals : defaultFractionalDigits;
};
