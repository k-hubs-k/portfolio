import type { JSX } from "react";

export interface CommandOutput {
  type: "success" | "error" | "info";
  content: string | JSX.Element;
}

export interface HistoryEntry {
  command: string;
  output: CommandOutput;
  timestamp: Date;
}
