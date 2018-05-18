package host.exp.exponent;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import host.exp.exponent.generated.DetachBuildConstants;
import host.exp.exponent.experience.DetachActivity;
import host.exp.exponent.lockscreen.LockScreenOpenService;
import host.exp.exponent.lockscreen.LockScreenService;

public class MainActivity extends DetachActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@jb9229/tenspoon";
  }

  @Override
  public String developmentUrl() {
    return DetachBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("27.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }

  public ReactInstanceManager getReactInstanceManager() {
    return (ReactInstanceManager) mReactInstanceManager.get();
  }


  public void startLockViewService(){
//    Intent listenIntent = new Intent(getApplication(), LockScreenOpenService.class);
//    getApplicationContext().startService(listenIntent);
//    HeadlessJsTaskService.acquireWakeLockNow(getApplicationContext());


    Intent lockIntent   = new Intent(getApplication(), LockScreenService.class);
    getApplicationContext().startService(lockIntent);
  }


  public void stopLockViewService(){
//    Intent listenIntent = new Intent(getApplication(), LockScreenOpenService.class);
//    getApplicationContext().stopService(listenIntent);

    Intent lockIntent   = new Intent(getApplication(), LockScreenService.class);
    getApplicationContext().stopService(lockIntent);
  }
}
