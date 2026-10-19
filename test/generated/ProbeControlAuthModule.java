// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeControlAuthModule extends IControlAuthModule { public ProbeControlAuthModule(){super();}
@Override public void cancelListenFlightControlAuthority(int listen_id) {JavaApiOracle.record("ControlAuthModule","cancelListenFlightControlAuthority",new Object[]{listen_id});}
@Override public void cancelListenPayloadControlAuthority(String payload_index, int listen_id) {JavaApiOracle.record("ControlAuthModule","cancelListenPayloadControlAuthority",new Object[]{payload_index,listen_id});}
@Override public void acquireFlightControlAuthorityWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("ControlAuthModule","acquireFlightControlAuthorityWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void releaseFlightControlAuthorityWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("ControlAuthModule","releaseFlightControlAuthorityWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int listenFlightControlAuthorityWrapper(FlightControlAuthorityCallback callback) {JavaApiOracle.record("ControlAuthModule","listenFlightControlAuthorityWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void acquirePayloadControlAuthorityWrapper(String payload_index, ResultCallbackWithError callback) {JavaApiOracle.record("ControlAuthModule","acquirePayloadControlAuthorityWrapper",new Object[]{payload_index});JavaApiOracle.respond(callback);}
@Override public void releasePayloadControlAuthorityWrapper(String payload_index, ResultCallbackWithError callback) {JavaApiOracle.record("ControlAuthModule","releasePayloadControlAuthorityWrapper",new Object[]{payload_index});JavaApiOracle.respond(callback);}
@Override public int listenPayloadControlAuthorityWrapper(String payload_index, PayloadControlAuthorityCallback callback) {JavaApiOracle.record("ControlAuthModule","listenPayloadControlAuthorityWrapper",new Object[]{payload_index});JavaApiOracle.respond(callback);return 73;}
}
