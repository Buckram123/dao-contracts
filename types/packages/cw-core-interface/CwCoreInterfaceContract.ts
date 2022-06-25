/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export type Query = {
  token_contract: {
    [k: string]: unknown;
  };
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_power_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}