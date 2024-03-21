import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";
import { RoomProvider } from "@/liveblocks.config";

export const Room = ({ 
  children,
  roomId,
  fallback,
}) => {
  return (
    <RoomProvider 
      id={roomId} 
      initialPresence={{
        cursor: null,
        selection: [],
        pencilDraft: null,
        penColor: null,
      }}
      initialStorage={{
        layers: new LiveMap(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
