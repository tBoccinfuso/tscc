class Tree {
  // declare private access variables
  private numberOfBranches: number
  private leafColor: string
  private type: string

  // When we create a new instance of this class, assign the parameters to our class variables
  constructor (numberOfBranches: number , leafColor: string, type: string) {
    this.numberOfBranches = numberOfBranches
    this.leafColor = leafColor
    this.type = type    
  }

  // methods
  public defineTree() {
    console.log(`This is a ${this.type} tree. It has a total of ${this.numberOfBranches} and ${this.leafColor} leaves!`)
  }

}

let mapleTree = new Tree(42, "red", "maple")

mapleTree.defineTree()