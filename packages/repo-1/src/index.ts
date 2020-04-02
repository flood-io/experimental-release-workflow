class ExampleClass {
	async run() {
		return this.runInternal()
	}

	private runInternal() {
		return 10
	}
}

export default ExampleClass
