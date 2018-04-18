require 'test_helper'

class TrackerControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get tracker_home_url
    assert_response :success
  end

end
