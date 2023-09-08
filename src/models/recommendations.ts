import { z } from "zod";
import { Track } from "./tracks";

const Seeds = z.object({
  afterFilteringSize: z.number(),
  afterRelinkingSize: z.number(),
  href: z.string(),
  id: z.string(),
  initialPoolSize: z.number(),
  type: z.string(),
});

const SetofRecommendations = z.object({
  seeds: z.array(Seeds),
  tracks: z.array(Track),
});

const RecommendationsInput = z.object({
  limit: z.number().min(1).max(100).default(20).optional(),
  market: z.string().min(2).max(2).optional(),
  seed_artists: z.string().optional(),
  seed_genres: z.string().optional(),
  seed_tracks: z.string().optional(),
  min_acousticness: z.number().min(0).max(1).optional(),
  max_acousticness: z.number().min(0).max(1).optional(),
  target_acousticness: z.number().min(0).max(1).optional(),
  min_danceability: z.number().min(0).max(1).optional(),
  max_danceability: z.number().min(0).max(1).optional(),
  target_danceability: z.number().min(0).max(1).optional(),
  min_duration_ms: z.number().optional(),
  max_duration_ms: z.number().optional(),
  target_duration_ms: z.number().optional(),
  min_energy: z.number().min(0).max(1).optional(),
  max_energy: z.number().min(0).max(1).optional(),
  target_energy: z.number().min(0).max(1).optional(),
  min_instrumentalness: z.number().min(0).max(1).optional(),
  max_instrumentalness: z.number().min(0).max(1).optional(),
  target_instrumentalness: z.number().min(0).max(1).optional(),
  min_key: z.number().min(0).max(11).optional(),
  max_key: z.number().min(0).max(11).optional(),
  target_key: z.number().min(0).max(11).optional(),
  min_liveness: z.number().min(0).max(1).optional(),
  max_liveness: z.number().min(0).max(1).optional(),
  target_liveness: z.number().min(0).max(1).optional(),
  min_loudness: z.number().optional(),
  max_loudness: z.number().optional(),
  target_loudness: z.number().optional(),
  min_mode: z.number().min(0).max(1).optional(),
  max_mode: z.number().min(0).max(1).optional(),
  target_mode: z.number().min(0).max(1).optional(),
  min_popularity: z.number().min(0).max(100).optional(),
  max_popularity: z.number().min(0).max(100).optional(),
  target_popularity: z.number().min(0).max(100).optional(),
  min_speechiness: z.number().min(0).max(1).optional(),
  max_speechiness: z.number().min(0).max(1).optional(),
  target_speechiness: z.number().min(0).max(1).optional(),
  min_tempo: z.number().min(0).optional(),
  max_tempo: z.number().min(0).optional(),
  target_tempo: z.number().optional(),
  min_time_signature: z.number().min(0).max(11).optional(),
  max_time_signature: z.number().min(0).max(11).optional(),
  target_time_signature: z.number().min(0).max(11).optional(),
  min_valence: z.number().min(0).max(1).optional(),
  max_valence: z.number().min(0).max(1).optional(),
  target_valence: z.number().min(0).max(1).optional(),
});

type SetofRecommendationsType = z.infer<typeof SetofRecommendations>;
type RecommendationsInputType = z.infer<typeof RecommendationsInput>;

export {
  SetofRecommendations,
  SetofRecommendationsType,
  RecommendationsInput,
  RecommendationsInputType,
};
