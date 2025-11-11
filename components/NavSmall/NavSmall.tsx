type NavSmallPropsType = {
    id: number,
    title: string,
    link: string
}

export const NavSmall = (props:NavSmallPropsType) => {
    return (
        <div className={"navsmall"}>
            <div className={"navsmall__info"}>
                <div className={"navsmall__info__number"}>{props.id}</div>
                <div className={"navsmall__info__title"}>{props.title}</div>
            </div>
            <div className={"navsmall__arrows"}>
                <div className={"navsmall__arrow"}></div>
                <div className={"navsmall__arrow"}></div>
            </div>
        </div>
    )
    
}