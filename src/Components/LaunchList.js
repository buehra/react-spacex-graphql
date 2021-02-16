import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PAST_LAUNCHES } from "../GraphQL/Queries";

function LaunchList() {
    const { error, loading, data } = useQuery(LOAD_PAST_LAUNCHES);
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
      if (data) {
        setLaunches(data.launchesPast);
      }
    }, [data]);
    return (
        <div>
            <ul>
                {launches.map((value) => {
                    return (<li key={value.id}>{value.mission_name}</li>);
                })}
            </ul>
        </div>
    );
}

export default LaunchList;