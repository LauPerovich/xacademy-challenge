export interface Player {
    id?: number;
    player_face_url: string;
    // fifa_version: string;
    // fifa_update: string;
    long_name: string;
    player_positions: string;
    club_name: string;
    nationality_name: string;
    age: number;
    height_cm: number;
    weight_kg: number;
    // preferred_foot: string;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physic: number;
}