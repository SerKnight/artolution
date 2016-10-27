Rails.application.configure do

  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local = false
  config.action_controller.perform_caching = true
  config.serve_static_assets = true
  config.assets.js_compressor = :uglifier
  config.assets.digest = true
  config.assets.version = '1.0'
  # config.force_ssl = true
  # Set to :debug to see everything in the log.
  config.log_level = :info

  config.assets.compile = false

  # config.log_tags = [ :subdomain, :uuid ]
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)
  # config.cache_store = :mem_cache_store
  # config.action_controller.asset_host = "http://assets.example.com"

  # Precompile additional assets.
  # application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
  # config.assets.precompile += %w( search.js )
  config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif .svg .eot .woff .ttf )
  config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
  

  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.perform_deliveries = true
  config.action_mailer.default_url_options = { host: 'www.advlo.com' }
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify


  config.paperclip_defaults = {
    :storage => :s3,
    :s3_credentials => {
      :bucket => ENV['S3_BUCKET_NAME'],
      :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
      :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
    },
    :path => ":class/:attachment/:id_partition/:style/:filename",
    :bucket => ENV['S3_BUCKET_NAME'],
    :s3_region => 'us-east-1',
    :s3_host_name => 's3.amazonaws.com'
  }

  # :url => ':s3_alias_url',
  # :s3_host_alias => 'static.artolution.com',

  # :s3_host_name => ,
  # :region => ENV['AWS_REGION'],
  # :s3_region => ENV['AWS_REGION'],
  # 

  config.action_mailer.smtp_settings = {
    address: "smtp.gmail.com",
    port: 587,
    domain: Rails.application.secrets.domain_name,
    authentication: "plain",
    enable_starttls_auto: true,
    user_name: Rails.application.secrets.email_provider_username,
    password: Rails.application.secrets.email_provider_password
  }
  # ActionMailer Config
  config.action_mailer.default_url_options = { :host => Rails.application.secrets.domain_name }
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = false


  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false
end
