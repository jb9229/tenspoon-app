package host.exp.exponent;


import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import host.exp.exponent.react.TSReactPackage;

// Needed for `react-native link`
// import com.facebook.react.ReactApplication;

public class MainApplication extends ExpoApplication implements ReactApplication{


  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {

    return Arrays.<ReactPackage>asList(
            // Add your own packages here!
            // TODO: add native modules!

            // Needed for `react-native link`
//              new MainReactPackage(),
            new TSReactPackage()
    );
  }

  @Override
  public String gcmSenderId() {
    return getString(R.string.gcm_defaultSenderId);
  }

  @Override
  public boolean shouldUseInternetKernel() {
    return BuildVariantConstants.USE_INTERNET_KERNEL;
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return MainApplication.this.getPackages();
    }
  };
}
