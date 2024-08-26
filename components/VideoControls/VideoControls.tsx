import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import AirPlayIcon from "@/assets/icons/airplay-icon.svg";
import BackwardIcon from "@/assets/icons/backward-icon.svg";
import ForwardIcon from "@/assets/icons/forward-icon.svg";
import FullscreenIcon from "@/assets/icons/fullscreen-icon.svg";
import LeftArrow from "@/assets/icons/leftarrow-icon.svg";
import PlayIcon from "@/assets/icons/play-icon.svg";
import SoundIcon from "@/assets/icons/volume-icon.svg";

import { styles } from "./VideoControl.styles";

type Props = {
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setControlsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFullscreen: () => void;
};

export const VideoControls = ({
  setControlsVisible,
  setIsPaused,
  toggleFullscreen,
}: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => setControlsVisible(false)}
      style={styles.container}
    >
      <View style={styles.controlsHeader}>
        <TouchableOpacity
          style={styles.mediumIcon}
          onPress={() => router.back()}
        >
          <LeftArrow height={24} width={24} />
        </TouchableOpacity>
        <View style={styles.topRightControls}>
          <TouchableOpacity style={[styles.mediumIcon, { marginLeft: 8 }]}>
            <SoundIcon height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.mediumIcon, { marginLeft: 8 }]}>
            <AirPlayIcon height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.controlsCenter}>
        <TouchableOpacity style={styles.mediumIcon}>
          <BackwardIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bigIcon}
          onPress={() => setIsPaused((state) => !state)}
        >
          {/* TODO: change icon on play/pause state */}
          <PlayIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediumIcon}>
          <ForwardIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.controlsBottom}>
        <TouchableOpacity
          style={styles.fullScreenIcon}
          onPress={toggleFullscreen}
        >
          <FullscreenIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      {/* TODO: add red progress bar */}
    </TouchableOpacity>
  );
};

export default VideoControls;
