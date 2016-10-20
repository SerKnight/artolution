RailsAdmin.config do |config|
  ### Popular gems integration

  ## == Devise ==
  # == Devise ==
  config.authenticate_with do
    unless (current_user and allowed_user(current_user))
      flash[:error] = nil
      redirect_to '/'
    end    
  end

  config.model 'Project' do
    list do
      exclude_fields_if do
        type == :datetime
      end
      exclude_fields :artists
    end

    edit do
      field :title
      field :description, :froala
      field :body, :froala
      field :hero
      field :category
      field :category
      field :slug
      field :artists
      field :gallery_images

    end
  end


  config.model 'Artist' do
    list do
      exclude_fields_if do
        type == :datetime
      end

    end
  end

  config.model 'Category' do
    list do
      exclude_fields_if do
        type == :datetime
      end

    end
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
