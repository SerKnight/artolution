RailsAdmin.config do |config|

  config.model 'Project' do
    list do
      exclude_fields_if do
        type == :datetime
      end

      exclude_fields :artists
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

    dropzone do
      only Project
    end

    export
    bulk_delete
    show
    edit
    delete
    show_in_app

  end
end
