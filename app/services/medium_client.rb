class Medium
	require 'medium-sdk-ruby'
	require 'httparty'


	def initialize

		# If you have a self-issued access token, you can create a new client directly:
		# client = Medium::Client.new(integration_token: '1a19312abe74')

		# # Get profile details of the user identified by the access token.
		# client.users.me




		# Use the class methods to get down to business quickly
		client_id = '1a19312abe74'
		client_secret = '4831730aaab50551df5322e232293a7355b166d2' 
		redirect_uri = Rails.env.production? ? "http://artolution.herokuapp.com/medium/callback" : 'http://localhost:3000/callback'

		response = HTTParty.get("https://medium.com/m/oauth/authorize?client_id=1a19312abe74&scope=basicProfile,publishPost&state=legit&response_type=code&redirect_uri=http://localhost:3000/callback")

		"https://api.medium.com/v1?code=code&client_id=#{client_id}&client_secret=#{client_secret}&grant_type=authorization_code&redirect_uri=#{redirect_uri}"


    HTTParty.get("https://example.com/callback/medium?state={{state}}&code={{code}}")


    https://medium.com/m/oauth/authorize?client_id={{clientId}}
        &scope=basicProfile,publishPost
        &state={{state}}
        &response_type=code
        &redirect_uri={{redirectUri}}

		#puts response.body, response.code, response.message, response.headers.inspect

		HTTParty.get("https://api.medium.com/v1/users/lo_5c7368c78e39/publications")


		# Or wrap things up in your own class
	# 	class StackExchange
	# 	  include HTTParty
	# 	  base_uri 'api.stackexchange.com'

	# 	  def initialize(service, page)
	# 	    @options = { query: {site: service, page: page} }
	# 	  end

	# 	  def questions
	# 	    self.class.get("/2.2/questions", @options)
	# 	  end

	# 	  def users
	# 	    self.class.get("/2.2/users", @options)
	# 	  end
	# 	end

	# 	stack_exchange = StackExchange.new("stackoverflow", 1)
	# 	puts stack_exchange.questions
	# 	puts stack_exchange.users

	end		

end