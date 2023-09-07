import { z } from "zod";

const Meta = z.object({
  analyzer_version: z.string(),
  platform: z.string(),
  detailed_status: z.string(),
  status_code: z.number(),
  timestamp: z.number(),
  analysis_time: z.number(),
  input_process: z.string(),
});

const Track = z.object({
  num_samples: z.number(),
  duration: z.number(),
  sample_md5: z.string(),
  offset_seconds: z.number(),
  window_seconds: z.number(),
  analysis_sample_rate: z.number(),
  analysis_channels: z.number(),
  end_of_fade_in: z.number(),
  start_of_fade_out: z.number(),
  loudness: z.number(),
  tempo: z.number(),
  tempo_confidence: z.number(),
  time_signature: z.number(),
  time_signature_confidence: z.number(),
  key: z.number(),
  key_confidence: z.number(),
  mode: z.number(),
  mode_confidence: z.number(),
  codestring: z.string(),
  code_version: z.number(),
  echoprintstring: z.string(),
  echoprint_version: z.number(),
  synchstring: z.string(),
  synch_version: z.number(),
  rhythmstring: z.string(),
  rhythm_version: z.number(),
});

const Bar = z.object({
  start: z.number(),
  duration: z.number(),
  confidence: z.number(),
});

const Beat = z.object({
  start: z.number(),
  duration: z.number(),
  confidence: z.number(),
});

const Section = z.object({
  start: z.number(),
  duration: z.number(),
  confidence: z.number(),
  loudness: z.number(),
  tempo: z.number(),
  tempo_confidence: z.number(),
  key: z.number(),
  key_confidence: z.number(),
  mode: z.number(),
  mode_confidence: z.number(),
  time_signature: z.number(),
  time_signature_confidence: z.number(),
});

const Segment = z.object({
  start: z.number(),
  duration: z.number(),
  confidence: z.number(),
  loudness_start: z.number(),
  loudness_max: z.number(),
  loudness_max_time: z.number(),
  loudness_end: z.number(),
  pitches: z.array(z.number()),
  timbre: z.array(z.number()),
});

const Tatum = z.object({
  start: z.number(),
  duration: z.number(),
  confidence: z.number(),
});

const AudioAnalysis = z.object({
  meta: Meta,
  track: Track,
  bars: z.array(Bar),
  beats: z.array(Beat),
  sections: z.array(Section),
  segments: z.array(Segment),
  tatums: z.array(Tatum),
});

type AudioAnalysisType = z.infer<typeof AudioAnalysis>;

export { AudioAnalysis, AudioAnalysisType };
