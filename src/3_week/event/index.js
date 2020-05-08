class todo {
  constructor() {
    this.mount()
  }
  mount() {
    this.handleListClick()
    this.handleAddItem()
  }
  handleListClick() {
    // 이벤트 위임 e.target
  }
  handleAddItem() {}
}

/**
 * captureing - 부모로부터
 * bubbling - 자식부으로부터
 */
