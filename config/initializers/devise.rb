Devise.setup do |config|
  
  config.secret_key = '410c54eede8807e233e7ba615bf279130d84d09c8d34e475aa2b3233b008173a669e5eec10214ffe3d4da816cce2f0a2988f955ce24cbd50510a7274abd6a5b3'

  config.mailer_sender = 'info@artolution.com'


  require 'devise/orm/active_record'

  require 'omniauth-facebook'

  config.omniauth :facebook, ENV["FACEBOOK_ID"], ENV["FACEBOOK_SECRET"]


  config.case_insensitive_keys = [ :email ]
  config.strip_whitespace_keys = [ :email ]
  config.skip_session_storage = [:http_auth]
  config.stretches = Rails.env.test? ? 1 : 10
  config.reconfirmable = true
  config.password_length = 8..128
  config.reset_password_within = 6.hours
  config.sign_out_via = :delete

end
