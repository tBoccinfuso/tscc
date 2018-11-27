class Tree {
  // declare private access variables
  private numberOfBranches: number
  private leafColor: string
  protected type: string

  // When we create a new instance of this class, assign the parameters to our class variables
  constructor (numberOfBranches: number , leafColor: string, type: string) {
    this.numberOfBranches = numberOfBranches
    this.leafColor = leafColor
    this.type = type    
  }

  // methods
  public defineTree(treeType: string = this.type) {
    console.log(`This is a ${treeType} tree. It has a total of ${this.numberOfBranches} and ${this.leafColor} leaves!`)
  }

}

// New instance of Tree class
let mapleTree = new Tree(42, "red", "maple")

// Call method
mapleTree.defineTree()



// Extend the Tree class
class Elm extends Tree {
  constructor (numberOfBranches: number , leafColor: string, type: string) {
    super(numberOfBranches , leafColor, type)
  }

  // Use the method and pass in the elm value
  public defineTree(treeType = this.type) {
    super.defineTree(treeType);
  }
}

// New instance of Elm class
let elmTree = new Elm(42, "red", "maple")

// Call method.... but watch as our class overrides the "maple" value
elmTree.defineTree("elm")