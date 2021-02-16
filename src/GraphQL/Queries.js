import { gql } from "@apollo/client";

export const LOAD_PAST_LAUNCHES = gql`
query {
    launchesPast(limit: 10){
        id
        mission_name
        links {
            flickr_images
            mission_patch_small
        }
        rocket {
            rocket_name
        }
        launch_date_utc
    }
}
`;