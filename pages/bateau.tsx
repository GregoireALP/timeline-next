import type { NextPage } from 'next'
import { useState } from 'react';
import Navbar from '../components/navbar'
import BoatCard from '../components/boatCard';
import BoatData from "../json/BoatData.json"
import Footer from '../components/footer';

const Bateau: NextPage = () => {

    /**
     * @Boat_Information_Array
     * 0 => Boat Name
     * 1 => Boat Type
     * 2 => GV Size
     * 3 => Genoa Size
     * 4 => Spi Size
     * 5 => Boat Size
     * 6 => Boat Float Height
     * 7 => Bau Maximum
     * 8 => Boat Draft
     * 9 => Lest
     * 10 => Boat Weight
     * 11 => Motor Type
     * 12 => Boat Plans
     * 13 => Boat Image
     */

    /**
     * @Boat_Information_Id
     * 0 = XTRATIME
     * 1 = PRIMETIME
     * 2 = TIMELINE
     */

    const [boat, setboat] = useState(
        <BoatCard
            boatName={BoatData[2][0]}
            boatType={BoatData[2][1]}
            gvSize={BoatData[2][2]}
            genSize={BoatData[2][3]}
            spiSize={BoatData[2][4]}
            boatWidth={BoatData[2][5]}
            boatFloatHeight={BoatData[2][6]}
            maxBau={BoatData[2][7]}
            boatDraft={BoatData[2][8]}
            lest={BoatData[2][9]}
            boatHeight={BoatData[2][10]}
            motorType={BoatData[2][11]}
            boatPlan={BoatData[2][12]}
            boatImg={BoatData[2][13]}
        />
    ); // Set default boat view

    return (
        <div>
            <Navbar />
            <p className="title">Les Bateaux</p>

            <ul className="boat-list">
                <li className="boat-item" onClick={() => setboat(
                    <BoatCard
                        boatName={BoatData[2][0]}
                        boatType={BoatData[2][1]}
                        gvSize={BoatData[2][2]}
                        genSize={BoatData[2][3]}
                        spiSize={BoatData[2][4]}
                        boatWidth={BoatData[2][5]}
                        boatFloatHeight={BoatData[2][6]}
                        maxBau={BoatData[2][7]}
                        boatDraft={BoatData[2][8]}
                        lest={BoatData[2][9]}
                        boatHeight={BoatData[2][10]}
                        motorType={BoatData[2][11]}
                        boatPlan={BoatData[2][12]}
                        boatImg={BoatData[2][13]}
                    />
                )}>Timeline</li>

                <li className="boat-item" onClick={() => setboat(
                    <BoatCard
                        boatName={BoatData[1][0]}
                        boatType={BoatData[1][1]}
                        gvSize={BoatData[1][2]}
                        genSize={BoatData[1][3]}
                        spiSize={BoatData[1][4]}
                        boatWidth={BoatData[1][5]}
                        boatFloatHeight={BoatData[1][6]}
                        maxBau={BoatData[1][7]}
                        boatDraft={BoatData[1][8]}
                        lest={BoatData[1][9]}
                        boatHeight={BoatData[1][10]}
                        motorType={BoatData[1][11]}
                        boatPlan={BoatData[1][12]}
                        boatImg={BoatData[1][13]}
                    />
                )}>Primetime</li>

                <li className="boat-item" onClick={() => setboat(
                    <BoatCard
                        boatName={BoatData[0][0]}
                        boatType={BoatData[0][1]}
                        gvSize={BoatData[0][2]}
                        genSize={BoatData[0][3]}
                        spiSize={BoatData[0][4]}
                        boatWidth={BoatData[0][5]}
                        boatFloatHeight={BoatData[0][6]}
                        maxBau={BoatData[0][7]}
                        boatDraft={BoatData[0][8]}
                        lest={BoatData[0][9]}
                        boatHeight={BoatData[0][10]}
                        motorType={BoatData[0][11]}
                        boatPlan={BoatData[0][12]}
                        boatImg={BoatData[0][13]}
                    />
                )}>Xtratime</li>
            </ul>

            <div className="boat-container">
                {boat}
            </div>
            <Footer />
        </div>
    )
}

export default Bateau
