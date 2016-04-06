env_file = Rails.root.join("config", 'environment_variables.yml').to_s

raise "You must set up an environment_variables.yml config file" unless File.exists?(env_file)

YAML.load_file(env_file)[Rails.env].each do |key, value|
	ENV[key.to_s] = value
end # end YAML.load_file
