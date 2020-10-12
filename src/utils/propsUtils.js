function appendStyle(props, style) {
    let newProps = {...props}
    newProps.style = {...newProps.style, ...style}
    return newProps
}

function removeChildren(props) {
    let newProps = {...props}
    delete newProps.children
    return newProps
}


export { appendStyle, removeChildren }