import WarRegion from "./fortConquest/WarRegion";


export default function FortConquestPage(){
    // import { useNavigate } from "react-router-dom";
    // let navigate = useNavigate();
    // // Somewhere in your code, e.g. inside a handler:
    //
    // setInterval(() => {
    //
    //     navigate("/home");  // redirect from code
    // }, 5000)

    const warRegions = [
        {
            name: "Hesed", fortresses: ["Chaos Teiyon unit", "Hwaland Farming Village", "Mosswood Research Camp",],
        }, {
            name: "Ardir", fortresses: ["Sanctum of Spirits", "Worshippers' Fortress", "Wanderers Camp",]
        }, {
            name: "Gebra", fortresses: ["Lost fortress", "Lumber Mill Village", "Werebeast Village",],
        }, {
            name: "Tyco", fortresses: ["Jungle Fortress", "Jululia Village", "idk" ],
        },
    ];

    let renderRegions = [];
    let regionKey = 0;
    for (const region of warRegions) {
        renderRegions.push(
            <WarRegion
                key={`war_region_${regionKey++}`}
                name={region.name}
                fortresses={region.fortresses}
            />
        );
    }

    return (
        <div className={"regionList"}>
            {renderRegions}
        </div>
    )
}
