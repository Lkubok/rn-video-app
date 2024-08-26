import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";

import AirPlayIcon from "@/assets/icons/airplay-icon.svg";
import BackwardIcon from "@/assets/icons/backward-icon.svg";
import ForwardIcon from "@/assets/icons/forward-icon.svg";
import FullscreenIcon from "@/assets/icons/fullscreen-icon.svg";
import LeftArrow from "@/assets/icons/leftarrow-icon.svg";
import PlayIcon from "@/assets/icons/play-icon.svg";
import SoundIcon from "@/assets/icons/volume-icon.svg";

type Props = {
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setControlsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const VideoControls = ({ setControlsVisible, setIsPaused }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => setControlsVisible(false)}
      style={{
        position: "absolute",
        top: 0,
        height: 280,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingTop: StatusBar.currentHeight,
          paddingHorizontal: 24,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            borderRadius: 16,
            backgroundColor: "rgba(0,0,0,0.25)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.back()}
        >
          <LeftArrow height={24} width={24} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              backgroundColor: "rgba(0,0,0,0.25)",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 8,
            }}
            onPress={() => {}}
          >
            <SoundIcon height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              backgroundColor: "rgba(0,0,0,0.25)",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 8,
            }}
            onPress={() => {}}
          >
            <AirPlayIcon height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            borderRadius: 16,
            backgroundColor: "rgba(0,0,0,0.25)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {}}
        >
          <BackwardIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "rgba(0,0,0,0.25)",
            justifyContent: "center",
            alignItems: "center",
            margin: 64,
          }}
          onPress={() => setIsPaused((state) => !state)}
        >
          <PlayIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            borderRadius: 16,
            backgroundColor: "rgba(0,0,0,0.25)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {}}
        >
          <ForwardIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 40,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 24,
        }}
      >
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {}}
        >
          <FullscreenIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default VideoControls;
