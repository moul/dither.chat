import { Decimal } from '@cosmjs/math';

export const defaultFractionalDigits = 6;
export const defaultMinimalCoinDenom = 'uphoton';

export const addAtomics = (firstAtomicsAmount: string, secondAtomicsAmount: string) => {
    return Decimal.fromAtomics(firstAtomicsAmount, 0)
        .plus(Decimal.fromAtomics(secondAtomicsAmount, 0))
        .toString();
};
