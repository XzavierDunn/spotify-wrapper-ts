import { z } from "zod";

const AudioFeatures = z.object({
  acousticness: z.number(),
  analysis_url: z.string(),
  danceability: z.number(),
  duration_ms: z.number(),
  energy: z.number(),
  id: z.string(),
  instrumentalness: z.number(),
  key: z.number(),
  liveness: z.number(),
  loudness: z.number(),
  mode: z.number(),
  speechiness: z.number(),
  tempo: z.number(),
  time_signature: z.number(),
  track_href: z.string(),
  type: z.literal("audio_features"),
  uri: z.string(),
  valence: z.number(),
});

const SetofAudioFeatures = z.object({
  audio_features: z.array(AudioFeatures),
});

type AudioFeaturesType = z.infer<typeof AudioFeatures>;
type SetofAudioFeaturesType = z.infer<typeof SetofAudioFeatures>;

export {
  AudioFeatures,
  AudioFeaturesType,
  SetofAudioFeatures,
  SetofAudioFeaturesType,
};
