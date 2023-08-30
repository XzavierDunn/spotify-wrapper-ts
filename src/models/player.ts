import { z } from "zod";
import { ExternalUrls } from "./shared";
import { Track } from "./tracks";
import { Episode } from "./episodes";

const offset = z.object({
  position: z.number().optional(),
  uri: z.string().optional(),
});

const Context = z.object({
  type: z.string(),
  href: z.string(),
  external_urls: ExternalUrls,
  uri: z.string(),
});

const Actions = z.object({
  interrupting_playback: z.boolean().optional(),
  pausing: z.boolean().optional(),
  resuming: z.boolean().optional(),
  seeking: z.boolean().optional(),
  skipping_next: z.boolean().optional(),
  skipping_prev: z.boolean().optional(),
  toggling_repeat_context: z.boolean().optional(),
  toggling_shuffle: z.boolean().optional(),
  toggling_repeat_track: z.boolean().optional(),
  transferring_playback: z.boolean().optional(),
  disallows: z.object({
    // TODO: Is there a allows? This disallows is not documented. Are all values optional here too?
    interrupting_playback: z.boolean().optional(),
    pausing: z.boolean().optional(),
    resuming: z.boolean().optional(),
    seeking: z.boolean().optional(),
    skipping_next: z.boolean().optional(),
    skipping_prev: z.boolean().optional(),
    toggling_repeat_context: z.boolean().optional(),
    toggling_shuffle: z.boolean().optional(),
    toggling_repeat_track: z.boolean().optional(),
    transferring_playback: z.boolean().optional(),
  }),
});

const Device = z.object({
  id: z.string(),
  is_active: z.boolean(),
  is_private_session: z.boolean(),
  is_restricted: z.boolean(),
  name: z.string(),
  type: z.string(),
  volume_percent: z.number(),
});

const SeveralDevices = z.object({
  devices: z.array(Device),
});

const PlaybackState = z.object({
  device: Device.optional(),
  repeat_state: z.string().optional(),
  shuffle_state: z.boolean().optional(),
  context: Context.nullable(),
  timestamp: z.number(),
  progress_ms: z.number(),
  is_playing: z.boolean(),
  item: Track.optional() || Episode.optional(),
  currently_playing_type: z.string(),
  actions: Actions,
});

type PlaybackStateType = z.infer<typeof PlaybackState>;
type SeveralDevicesType = z.infer<typeof SeveralDevices>;
type offsetType = z.infer<typeof offset>;

export {
  PlaybackState,
  PlaybackStateType,
  SeveralDevices,
  SeveralDevicesType,
  offset,
  offsetType,
};
