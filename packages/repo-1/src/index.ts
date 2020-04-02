class ExampleClass {
	async run() {
		return this.runInternal()
	}

	private runInternal() {
		return 13
	}
}

export default ExampleClass
