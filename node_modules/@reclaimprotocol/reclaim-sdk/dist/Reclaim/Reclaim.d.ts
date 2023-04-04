import { ClaimProvider } from "../types";
import Connection from "./Connection";
/** Reclaim class */
export declare class Reclaim {
    /**
     * Property creatorWallet
     * @type {Wallet}
     */
    private creatorWallet;
    /**
     * Property callbackUrl
     * @type {string}
    */
    private callbackUrl;
    /**
     * Constructor
     * @param callbackUrl - callback url called when user submits the claim
     */
    constructor(callbackUrl: string);
    /**
     * Connect to Reclaim
     * @param applicationName - name of the application
     * @param claimProviders - providers to get claims
     * @returns {Promise<Connection>}
     */
    connect: (applicationName: string, claimProviders: ClaimProvider[]) => Promise<Connection>;
}
