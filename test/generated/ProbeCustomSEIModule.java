// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeCustomSEIModule extends ICustomSEIModule { public ProbeCustomSEIModule(){super();}
@Override public boolean CustomSEIEncodeWrapper(IntVector frame_data, SeiItemVector custom_sei_data, IntVector output_frame_data) {JavaApiOracle.record("CustomSEIModule","CustomSEIEncodeWrapper",new Object[]{frame_data,custom_sei_data,output_frame_data});return true;}
@Override public boolean CustomSEIDecodeWrapper(IntVector frame_data, SeiHeader output_header, SeiItemVector output_sei_data) {JavaApiOracle.record("CustomSEIModule","CustomSEIDecodeWrapper",new Object[]{frame_data,output_header,output_sei_data});return true;}
}
