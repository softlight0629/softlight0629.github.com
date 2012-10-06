class Metal
	@var = "class variable"

	def var=(var)
		@var = var
	end

	def var
		puts @var
	end

	def Metal.classvar
		puts @var
	end
	
end

ins = Metal.new()
Metal.classvar
ins.var="instance variable"
ins.var