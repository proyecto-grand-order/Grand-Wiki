      content.style.transform = `translate(
        0px,
        ${-state.position.y < 0 ? -state.position.y : '0'}px
      )`;