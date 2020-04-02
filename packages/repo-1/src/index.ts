class ExampleClass {
	async run() {
		return this.runInternal()
	}

	private runInternal() {
		return 11
	}
}

export default ExampleClass
