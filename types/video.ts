export type SafeVideo =
  | {
      type: "official_embed";
      url: string;
      channelCredit: string;
    }
  | {
      type: "original_recap";
      url: string;
      transcript?: string;
    };
