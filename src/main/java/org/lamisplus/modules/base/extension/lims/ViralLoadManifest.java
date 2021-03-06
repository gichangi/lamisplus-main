package org.lamisplus.modules.base.extension.lims;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class ViralLoadManifest implements Serializable  {
    private String manifestID;
    private String sendingFacilityID;
    private String sendingFacilityName;
    private String receivingLabID;
    private String receivingLabName;
    private List<ViralLoadSampleInformation> sampleInformation;
}
