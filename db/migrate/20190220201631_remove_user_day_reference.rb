class RemoveUserDayReference < ActiveRecord::Migration[5.2]
  def change
  	remove_reference(:days, :user, index: true)
  end
end
