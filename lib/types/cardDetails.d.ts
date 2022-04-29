export var unused: {};
export type CardDetails = {
    /**
     * -An optional override of the default card statement descriptor for a single transfer.
     */
    dynamicDescriptor: string;
    /**
     * - Enum: [recurring unscheduled] Describes how the card transaction was initiated
     */
    merchantInitiatedType: "recurring" | "unscheduled" | null;
};
//# sourceMappingURL=cardDetails.d.ts.map