class ExampleClass {
	async run() {
		return this.runInternal()
	}

	private runInternal() {
		return 15
	}
}

export default ExampleClass
