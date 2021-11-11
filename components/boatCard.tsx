import type { NextPage } from 'next'
import Image from 'next/image'
import { IMAGE_BOAT_PATH } from '../core/Paths'

interface IProps {
    boatName: string;
    boatType: string;
    gvSize: string;
    genSize: string;
    spiSize: string;
    boatWidth: string;
    boatFloatHeight: string;
    maxBau: string;
    boatDraft: string;
    lest: string;
    boatHeight: string;
    motorType: string;
    boatPlan: string;
    boatImg: string;
}

const BoatCard: NextPage<IProps> = (props) => {
    return (
        <div className="boat-card">
            <div className="boat-card-image-conatiner">
                <Image src={"/.." + IMAGE_BOAT_PATH + props.boatPlan} width="350" height="450" className="boat-card-image-frame" />
            </div>
            <div className="boat-card-details-conatiner">
                <ul className="boat-card-details-list">
                    <li>Nom: {props.boatName}</li>
                    <li>Model: {props.boatType}</li>
                    <li>Surface GV: {props.gvSize}</li>
                    <li>Surface Genois: {props.genSize}</li>
                    <li>Surface Spi: {props.spiSize}</li>
                    <li>Surface au pres: {parseFloat(props.gvSize) + parseFloat(props.genSize)} m²</li>
                    <li>Surface au portant: {parseFloat(props.gvSize) + parseFloat(props.spiSize)} m²</li>
                    <li>Longueur hors-tout: {props.boatWidth}</li>
                    <li>Longueur de flotaison: {props.boatFloatHeight}</li>
                    <li>Bau max: {props.maxBau}</li>
                    <li>Déplacement: {props.lest}</li>
                    <li>Hauteur: {props.boatHeight}</li>
                    <li>Moteur: {props.motorType}</li>
                </ul>
            </div>
            <div className="boat-card-image-conatiner">
                <Image src={"/.." + IMAGE_BOAT_PATH + props.boatImg} width="300" height="450" className="boat-card-image-frame" />
            </div>
        </div>
    )
}

export default BoatCard
