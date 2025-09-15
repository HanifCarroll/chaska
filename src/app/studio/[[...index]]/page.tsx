"use client";
import { Studio } from "sanity";
import config from "@/sanity.config";

export default function StudioPage() {
  return (
    <div className="sanity-studio-wrapper">
      <Studio config={config} />
    </div>
  );
}
