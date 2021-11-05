function createElement(
    type,
    { classNames = [], attributes = null, events = null } = {},
    ...children
  ) {
    const elem = document.createElement(type);
    if (classNames) elem.classList.add(...classNames);
    if (attributes)
      for (const attr of attributes) {
        elem.setAttribute(attr[0], attr[1]);
      }
    elem.append(...children);
    if (events)
      for (const event of events) {
        elem.addEventListener(event[0], event[1]);
      }
    return elem;
  }