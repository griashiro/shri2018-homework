class Store {
  private state: Object = {}
  private liteners: Function[] = []
  private reducers: Function[] = []

  constructor (...reducers: Function[]) {
    this.reducers.push(...reducers)
    this.initializeState()
  }

  public getState = (): any => {
    return this.state
  }

  public subscribe = (listener: Function): Function => {
    const id = this.liteners.push(listener) - 1

    return () => {
      this.unsubsribe(id)
    }
  }

  public dispatch = (action: Object) => {
    this.updateState(action)
    this.notifyListeners()
  }

  private unsubsribe (listenerId: number) {
      delete this.liteners[listenerId]
      this.liteners = this.liteners.filter((item) => {
        return item
      })
  }

  private initializeState () {
    for (const reducer of this.reducers) {
      this.state = {...this.state, ...reducer({})}
    }
  }

  private updateState (action: Object) {
    for (const reducer of this.reducers) {
      this.state = reducer(action, this.state)
    }
  }

  private notifyListeners () {
    for (const listener of this.liteners) {
      listener()
    }
  }
}

export default Store
