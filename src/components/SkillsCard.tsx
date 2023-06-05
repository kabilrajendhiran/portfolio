import {ISkill} from "../utils/SkillsData.tsx";

const SkillsCard = (props: ISkill) => {
    return (
        <div
            key={props.id}
            style={{flexBasis: "32%"}}
            className="p-4 d-flex justify-content-center flex-column justify-content-center border shadow-sm rounded h-100">
            <div className="text-center">
                <img alt={props.name} width={32} height={32} src={props.img}/>
                <h6 className="mt-1 mb-2">{props.name}</h6>
            </div>
            <div>
                <p style={{textAlign: "justify", textJustify: "inter-word"}}>{props.content}</p>
            </div>
        </div>
    )
}

export default SkillsCard;