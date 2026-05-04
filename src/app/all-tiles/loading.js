
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      
      <Spinner
        size="lg"
        color="warning"   
      />

      <p className="text-gray-500 text-sm animate-pulse">
        Loading amazing tiles...
      </p>
    </div>
  );
}