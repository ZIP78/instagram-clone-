class AddFollowedUserId < ActiveRecord::Migration[5.2]
  def change
    add_column :followings, :followed_user_id, :integer
  end
end
