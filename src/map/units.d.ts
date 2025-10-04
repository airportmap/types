export type APMapUnits = 'default' | 'metric' | 'imperial';

export type APMapUnitSystems = 'metric' | 'imperial' | 'avionic';

export type APMapUnitSystemType = 'distance' | 'speed' | 'altitude';

type UnitConversionMap< S extends APMapUnitSystems > = {
    [ K in Exclude< APMapUnitSystems, S > ]: number;
};

export interface APMapUnitSystemEntry< S extends APMapUnitSystems > {
    base: string;
    convert: UnitConversionMap< S >;
    units: Record< string, number >;
}

export type APMapUnitSystem = {
    [ T in APMapUnitSystemType ]: APMapUnitSystemEntry< APMapUnitSystems >;
};
