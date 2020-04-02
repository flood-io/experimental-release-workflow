class ExampleClass {
	async run() {
		return this.runInternal()
	}

	private runInternal() {
		return 12
	}
}

export default ExampleClass
